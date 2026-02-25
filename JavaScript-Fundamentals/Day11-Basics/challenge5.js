// ============================================
// CHALLENGE 5: API Endpoint Builder
// ============================================

// 1. URL components
const protocol = "https";
const domain = "api.testing.com";
const version = "v1";
const resource = "users";
const userId = 42;

// 2. Build base URL
//    Format: https://api.testing.com
const baseUrl = `${protocol}://${domain}`;

// 3. Build versioned URL
//    Format: https://api.testing.com/v1
const versionedUrl = `${baseUrl}/${version}`;

// 4. Build full endpoint for all users
//    Format: https://api.testing.com/v1/users
const allUsersEndpoint = `${versionedUrl}/${resource}`;

// 5. Build endpoint for specific user
//    Format: https://api.testing.com/v1/users/42
const singleUserEndpoint = `${versionedUrl}/${resource}/${userId}`;

// 6. Build query parameters
const limit = 10;
const offset = 0;
const usersWithParams = `${allUsersEndpoint}?limit=${limit}&offset=${offset}`;

// 7. Create a URL builder report showing all variations
const urlBuilderReport = `
API Endpoint Builder Report
============================
Components:
  Protocol: ${protocol}
  Domain: ${domain}
  Version: ${version}
  Resource: ${resource}
  User ID: ${userId}

Built URLs:
  1. Base URL:
     ${baseUrl}
  
  2. Versioned URL:
     ${versionedUrl}
  
  3. All Users Endpoint:
     ${allUsersEndpoint}
  
  4. Single User Endpoint:
     ${singleUserEndpoint}
  
  5. Users with Pagination:
     ${usersWithParams}

Total URLs Generated: 5
`;

// 8. Log the report
console.log(urlBuilderReport);