import { defineFakeRoute } from "vite-plugin-fake-server/client";

// Mock refresh token interface

// The `expires` format is chosen for easy debugging. The backend might find it more convenient to set a timestamp directly (which should always increment). If the backend returns a timestamp format, go to this directory `src/utils/auth.ts` and change line `38` to expires = data.expires.

// 模拟刷新token接口
export default defineFakeRoute([
  {
    url: "/refresh-token",
    method: "post",
    response: ({ body }) => {
      if (body.refreshToken) {
        return {
          success: true,
          data: {
            accessToken: "eyJhbGciOiJIUzUxMiJ9.newAdmin",
            refreshToken: "eyJhbGciOiJIUzUxMiJ9.newAdminRefresh",
            // The `expires` format is chosen for easy debugging. The backend might find it more convenient to set a timestamp directly (which should always increment). If the backend returns a timestamp format, go to this directory `src/utils/auth.ts` and change line `38` to expires = data.expires.
            expires: "2030/10/30 23:59:59"
          }
        };
      } else {
        return {
          success: false,
          data: {}
        };
      }
    }
  }
]);
