// Permission type definitions
export type ResourceType = 'invoice' | 'quotation' | "purchase-order" | 'customer' | 'vendor' | 'inventory' | 'company' | 'employee';
export type ActionType = 'create' | 'read' | 'update' | 'delete' | 'list';

// Resource permissions structure
export interface ResourcePermissions {
  create: boolean;
  read: boolean;
  update: boolean;
  delete: boolean;
  list: boolean;
}

// Full permissions matrix type
export interface PermissionMatrix {
  [resource: string]: ResourcePermissions;
}

// Role definition type
export interface Role {
  name: string;
  description: string;
  permissions: PermissionMatrix;
}

// Roles dictionary type
export interface RolesDict {
  [key: string]: Role;
}

// Role info return type
export interface RoleInfo {
  key: string;
  name: string;
  description: string;
}

// Permission constants
const RESOURCES = {
  INVOICE: 'invoice' as ResourceType,
  QUOTATION: 'quotation' as ResourceType,
  CUSTOMER: 'customer' as ResourceType,
  VENDOR: 'vendor' as ResourceType,
  INVENTORY_ITEM: 'inventory' as ResourceType,
  COMPANY: 'company' as ResourceType,
  EMPLOYEE: 'employee' as ResourceType,
  PURCHASE_ORDER: 'purchase-order' as ResourceType
};

const ACTIONS = {
  CREATE: 'create' as ActionType,
  READ: 'read' as ActionType,
  UPDATE: 'update' as ActionType,
  DELETE: 'delete' as ActionType,
  LIST: 'list' as ActionType
};

// Role definitions with permission matrices
const ROLES: RolesDict = {
  ADMIN: {
    name: 'Administrator',
    description: 'Full access to all system features',
    permissions: {
      [RESOURCES.INVOICE]: { create: true, read: true, update: true, delete: true, list: true },
      [RESOURCES.QUOTATION]: { create: true, read: true, update: true, delete: true, list: true },
      [RESOURCES.CUSTOMER]: { create: true, read: true, update: true, delete: true, list: true },
      [RESOURCES.VENDOR]: { create: true, read: true, update: true, delete: true, list: true },
      [RESOURCES.INVENTORY_ITEM]: { create: true, read: true, update: true, delete: true, list: true },
      [RESOURCES.COMPANY]: { create: true, read: true, update: true, delete: false, list: true },
      [RESOURCES.EMPLOYEE]: { create: true, read: true, update: true, delete: true, list: true },
      [RESOURCES.PURCHASE_ORDER]: { create: true, read: true, update: true, delete: true, list: true }
    }
  },
  MANAGER: {
    name: 'Manager',
    description: 'Can manage most resources, but with limited deletion rights',
    permissions: {
      [RESOURCES.INVOICE]: { create: true, read: true, update: true, delete: false, list: true },
      [RESOURCES.QUOTATION]: { create: true, read: true, update: true, delete: false, list: true },
      [RESOURCES.CUSTOMER]: { create: true, read: true, update: true, delete: false, list: true },
      [RESOURCES.VENDOR]: { create: true, read: true, update: true, delete: false, list: true },
      [RESOURCES.INVENTORY_ITEM]: { create: true, read: true, update: true, delete: false, list: true },
      [RESOURCES.COMPANY]: { create: false, read: true, update: true, delete: false, list: true },
      [RESOURCES.EMPLOYEE]: { create: false, read: true, update: false, delete: false, list: true },
      [RESOURCES.PURCHASE_ORDER]: { create: true, read: true, update: true, delete: false, list: true }
    }
  },
  ACCOUNTANT: {
    name: 'Accountant',
    description: 'Manages financial documents and transactions',
    permissions: {
      [RESOURCES.INVOICE]: { create: true, read: true, update: true, delete: false, list: true },
      [RESOURCES.QUOTATION]: { create: true, read: true, update: true, delete: false, list: true },
      [RESOURCES.CUSTOMER]: { create: false, read: true, update: false, delete: false, list: true },
      [RESOURCES.VENDOR]: { create: false, read: true, update: false, delete: false, list: true },
      [RESOURCES.INVENTORY_ITEM]: { create: false, read: true, update: false, delete: false, list: true },
      [RESOURCES.COMPANY]: { create: false, read: true, update: false, delete: false, list: false },
      [RESOURCES.EMPLOYEE]: { create: false, read: false, update: false, delete: false, list: false },
      [RESOURCES.PURCHASE_ORDER]: { create: true, read: true, update: true, delete: false, list: true }
    }
  },
  EMPLOYEE: {
    name: 'Regular Employee',
    description: 'Basic access with limited permissions',
    permissions: {
      [RESOURCES.INVOICE]: { create: false, read: true, update: false, delete: false, list: true },
      [RESOURCES.QUOTATION]: { create: false, read: true, update: false, delete: false, list: true },
      [RESOURCES.CUSTOMER]: { create: false, read: true, update: false, delete: false, list: true },
      [RESOURCES.VENDOR]: { create: false, read: true, update: false, delete: false, list: true },
      [RESOURCES.INVENTORY_ITEM]: { create: false, read: true, update: false, delete: false, list: true },
      [RESOURCES.COMPANY]: { create: false, read: true, update: false, delete: false, list: false },
      [RESOURCES.EMPLOYEE]: { create: false, read: false, update: false, delete: false, list: false },
      [RESOURCES.PURCHASE_ORDER]: { create: false, read: true, update: false, delete: false, list: true }
    }
  }
};

/**
 * Creates a permission JSON structure for storing in the database
 * @param role - Role key (ADMIN, MANAGER, ACCOUNTANT, EMPLOYEE)
 * @returns JSON string of permissions
 */
const createPermissionJson = (role: string): string => {
  if (!ROLES[role]) {
    // Default to EMPLOYEE role if invalid role is provided
    return JSON.stringify(ROLES.EMPLOYEE.permissions);
  }
  return JSON.stringify(ROLES[role].permissions);
};

/**
 * Check if user has permission to perform an action on a resource
 * @returns True if user has permission, false otherwise
 */
const hasPermission = (
  permissionsJson: PermissionMatrix | string, 
  resource: ResourceType, 
  action: ActionType
): boolean => {
  try {
    // If permissions are stored as a string, parse them
    const permissions = typeof permissionsJson === 'string' 
      ? JSON.parse(permissionsJson) as PermissionMatrix
      : permissionsJson;
    
    // Check if resource exists in permissions
    if (!permissions[resource]) {
      return false;
    }

    // Check if action exists for the resource
    if (action in permissions[resource]) {
      return permissions[resource][action] === true;
    }
    
    return false;
  } catch (error) {
    console.error('Error checking permissions:', error);
    return false;
  }
};

/**
 * Get role key by permissions JSON
 * @param permissionsJson - Permissions object to check
 * @returns Role key or null if no match
 */
const getRoleByPermissions = (permissionsJson: PermissionMatrix | string): string | null => {
  const permissions = typeof permissionsJson === 'string' 
    ? JSON.parse(permissionsJson) as PermissionMatrix
    : permissionsJson;
    
  for (const [roleKey, role] of Object.entries(ROLES)) {
    if (JSON.stringify(permissions) === JSON.stringify(role.permissions)) {
      return roleKey;
    }
  }
  
  return null; // Custom role
};

/**
 * Get role information including name and description
 * @param roleKey - The role key (ADMIN, MANAGER, etc.)
 * @returns Role information or null if not found
 */
const getRoleInfo = (roleKey: string): RoleInfo | null => {
  if (ROLES[roleKey]) {
    return {
      key: roleKey,
      name: ROLES[roleKey].name,
      description: ROLES[roleKey].description
    };
  }
  return null;
};

/**
 * Updates specific permissions in a role
 * @param currentPermissions - Current permissions JSON
 * @param resource - Resource to update
 * @param action - Action to update
 * @param value - New permission value
 * @returns Updated permissions object
 */
const updateSpecificPermission = (
  currentPermissions: PermissionMatrix | string, 
  resource: ResourceType, 
  action: ActionType, 
  value: boolean
): PermissionMatrix => {
  const permissions = typeof currentPermissions === 'string' 
    ? JSON.parse(currentPermissions) as PermissionMatrix
    : {...currentPermissions};
  
  // Ensure resource exists
  if (!permissions[resource]) {
    permissions[resource] = {
      create: false,
      read: false,
      update: false,
      delete: false,
      list: false
    };
  }
  
  // Update specific permission
  permissions[resource][action] = value;
  
  return permissions;
};

/**
 * Get all available roles
 * @returns Array of role objects with key, name and description
 */
const getAllRoles = (): RoleInfo[] => {
  return Object.entries(ROLES).map(([key, role]) => ({
    key,
    name: role.name,
    description: role.description
  }));
};

export {
  RESOURCES,
  ACTIONS,
  ROLES,
  createPermissionJson,
  hasPermission,
  getRoleByPermissions,
  getRoleInfo,
  updateSpecificPermission,
  getAllRoles
};