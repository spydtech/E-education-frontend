# Step 1: Build Stage
FROM node:18 AS builder
WORKDIR /E-education-frontend
 
# Copy only package.json and package-lock.json first (optimizing Docker cache)
COPY package*.json ./
 
# Install all dependencies (including dev dependencies)
RUN npm install
 
# Copy the rest of the project files
COPY . .
 
# Build the application
RUN npm run build
 
# Step 2: NGINX Stage
FROM nginx:latest
 
# Copy the built files from the builder stage
COPY --from=builder /E-education-frontend/dist /usr/share/nginx/html
 
EXPOSE 80
EXPOSE 3000
EXPOSE 8082
CMD ["nginx", "-g", "daemon off;"]
