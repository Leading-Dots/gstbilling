import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Plus, Search, Users } from "lucide-react";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { CompanyEmployee, EmployeeStatus } from "@/API";
import EmployeeTable from "@/components/tables/EmployeeTable";
import { getEmployeesByCompany } from "@/db/Company";
import { useAuth } from "@/hooks/useAuth";

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<CompanyEmployee[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const listEmployees = async () => {
      try {
        const employeeData = await getEmployeesByCompany(user.company_id);
        if (employeeData) {
          setEmployees(employeeData);
        }
      } catch (error) {
        console.error("Error fetching employees:", error);
      } finally {
        setLoading(false);
      }
    };
    listEmployees();
  }, []);

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8 container w-full flex flex-col">
    <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Employees</h2>
        <p className="text-muted-foreground">
          Manage your employee information and track performance
        </p>
      </div>
      <Link to="/employees/new">
        <Button className="ml-auto">
          <Plus className="h-4 w-4" />
          Add Employee
        </Button>
      </Link>
    </div>

    <div className="flex items-center gap-2">
      <div className="relative flex-1 md:max-w-sm">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search employees..."
          className="pl-8"
        />
      </div>
      <Button variant="outline" size="icon">
        <Download className="h-4 w-4" />
      </Button>
    </div>

  <div className="grid grid-cols-2 gap-4">
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">
        Total Employees
      </CardTitle>
      <Users className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
      <div className="text-2xl font-bold">{employees.length}</div>
      <p className="text-xs text-muted-foreground">+3 this month</p>
      </CardContent>
    </Card>
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">
        Active Employees
      </CardTitle>
      <Users className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
      <div className="text-2xl font-bold">
        {
          employees.filter(
          (e) => e.profile_status === EmployeeStatus.ACTIVE
          ).length
        }
      </div>
      <p className="text-xs text-muted-foreground">
        {employees.length
          ? Math.round(
            (employees.filter(
              (e) => e.profile_status === EmployeeStatus.ACTIVE
            ).length /
              employees.length) *
              100
          )
          : 0}
        % of total
      </p>
      </CardContent>
    </Card>
  </div>

    <div className="w-full">
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="all">All Employees</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="inactive">Inactive</TabsTrigger>
        </TabsList>

        <div className="w-full">
          <TabsContent value="all" className="mt-0">
            <Card>
              <CardContent className="p-0">
                <EmployeeTable employees={employees} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="active" className="mt-0">
            <Card>
              <CardContent className="p-0">
                <EmployeeTable
                  employees={employees.filter(
                    (employee) => employee.profile_status === EmployeeStatus.ACTIVE
                  )}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inactive" className="mt-0">
            <Card>
              <CardContent className="p-0">
                <EmployeeTable
                  employees={employees.filter(
                    (employee) =>
                      employee.profile_status === EmployeeStatus.INACTIVE
                  )}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  </div>
  );
}
