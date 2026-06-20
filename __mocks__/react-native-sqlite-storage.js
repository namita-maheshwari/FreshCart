const mockSQLite = {
    openDatabase: jest.fn(() => ({
      transaction: jest.fn(),
    })),
  };
  
  export default mockSQLite;