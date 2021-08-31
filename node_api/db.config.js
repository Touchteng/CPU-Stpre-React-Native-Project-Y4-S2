module.exports = {
  HOST: "localhost",
  USER: "cpu",
  PORT: 3306,
  PASSWORD: "cpustore",
  DB: "cpuStoreRN",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
