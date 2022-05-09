const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/mernproject',
  stripe_connect_test_client_id: 'ca_LdT7w3uee5CxB9t9Ti7HUS3LphYs8TIA',
  stripe_test_secret_key: 'sk_test_51Kvn0bSJW0tivuJ7fpzKFptN9waZeKS1O1NOw8mgVSeJ78qn1y2ENXQQP5PQxcMnhLuPATMgMgHn7gKWFpUOjmCp00GbmlArKe',
  stripe_test_api_key: 'pk_test_51Kvn0bSJW0tivuJ7xZTBS7f0M5X6WlgLrpumNllDBykd6OoaTT80gX1jm5W1Bt3Sdz0AXL2mObBS4PwSgtmFeYjg00hj7Eni9Y' 
}

export default config
