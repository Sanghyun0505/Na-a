module.exports = {
  apps: [
    {
      name: "icare-app",
      script: "./node_modules/next/dist/bin/next",
      args: "start -p " + (process.env.PORT || 80),
      watch: false,
      autorestart: true,
    },
  ],
};
