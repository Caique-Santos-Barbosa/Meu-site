import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client without authentication required
export const base44 = createClient({
  appId: "687088c52e5557344ea64c2e", 
  requiresAuth: false // Não exige autenticação para as operações
});
