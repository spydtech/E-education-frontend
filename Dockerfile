# Step 1: Build Stage
FROM node:18 AS builder
WORKDIR /E-education-frontend
# Copy only package.json and package-lock.json first (optimizing Docker cache)
COPY package*.json ./
 
# Ensure the correct version of npm is used
RUN npm install -g npm@latest
 
# Install dependencies without dev dependencies
RUN npm install --omit=dev && npm cache clean --force
 
# Copy the rest of the project files
COPY . .
 
# Build the application
RUN npm run build
 
# Step 2: NGINX Stage
FROM nginx:latest
COPY --from=builder /app/dist /usr/share/nginx/html  # Vite outputs to 'dist' folder
 
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
