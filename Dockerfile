# Step 1: Build Stage
FROM node:latest AS builder
WORKDIR /E-education-frontend

# Ensure package.json and package-lock.json are copied from the build context (current directory)
COPY package*.json ./
RUN npm cache clean --force 
RUN npm install vite@latest @vitejs/plugin-react@latest --save-dev
 
# Copy the rest of the project files
COPY . .
# RUN npm audit fix
RUN npm run build
 
# Step 2: NGINX Stage
FROM nginx:latest
COPY --from=builder /E-education-frontend/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
