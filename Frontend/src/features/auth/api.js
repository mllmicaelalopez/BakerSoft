// Placeholder for authentication requests.
// TODO: Replace with real API integration once backend endpoints are available.
export const login = async (credentials) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        user: {
          firstName: 'Baker',
          lastName: 'Soft',
          email: credentials.email,
        },
      });
    }, 800);
  });
};

export const register = async (payload) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'Cuenta creada correctamente.',
        userId: Date.now(),
      });
    }, 800);
  });
};
