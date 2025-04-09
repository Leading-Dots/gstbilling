import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function FormLoader() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      {/* Header Skeleton */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <Skeleton className="h-8 w-[200px]" />
        </div>
        <Skeleton className="h-10 w-[100px]" />
      </div>

      {/* Invoice Details and Customer Selection */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-[140px] mb-2" />
            <Skeleton className="h-4 w-[200px]" />
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-10 w-full" />
            <div className="grid gap-4 md:grid-cols-2">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-[140px] mb-2" />
            <Skeleton className="h-4 w-[200px]" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-10 w-full mb-4" />
            <Skeleton className="h-4 w-[180px]" />
          </CardContent>
        </Card>
      </div>

      {/* From and To Information */}
      <div className="grid gap-6 md:grid-cols-2">
        {[1, 2].map((index) => (
          <Card key={index}>
            <CardHeader>
              <Skeleton className="h-6 w-[140px] mb-2" />
              <Skeleton className="h-4 w-[200px]" />
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-20 w-full" />
              <div className="grid gap-4 md:grid-cols-2">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Invoice Items */}
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-[140px] mb-2" />
          <Skeleton className="h-4 w-[200px]" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((index) => (
              <div key={index} className="grid grid-cols-12 gap-2">
                <div className="col-span-5">
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="col-span-1">
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="col-span-2">
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="col-span-1">
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="col-span-2">
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="col-span-1">
                  <Skeleton className="h-10 w-10" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Totals */}
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-[140px]" />
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="flex justify-between">
                <Skeleton className="h-4 w-[100px]" />
                <Skeleton className="h-4 w-[80px]" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Notes and Terms */}
      <div className="grid gap-6 md:grid-cols-2">
        {[1, 2].map((index) => (
          <Card key={index}>
            <CardHeader>
              <Skeleton className="h-6 w-[140px] mb-2" />
              <Skeleton className="h-4 w-[200px]" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-32 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Form Actions */}
      <div className="flex justify-end gap-4">
        <Skeleton className="h-10 w-[100px]" />
      </div>
    </div>
  );
}
