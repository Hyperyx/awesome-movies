# Dockerfile

FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build-env
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY /Trivident.Movies.ApplicationCore/*.csproj ./Trivident.Movies.ApplicationCore/
COPY /Trivident.Movies.Infrastructure/*.csproj ./Trivident.Movies.Infrastructure/
COPY /Trivident.Movies.Web/*.csproj ./Trivident.Movies.Web/
COPY *.sln ./
RUN dotnet restore

# Copy everything else and build
COPY . .
RUN dotnet publish -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
WORKDIR /app
COPY --from=build-env /app/out .

# Run the app on container startup
# Use your project name for the second parameter
# e.g. MyProject.dll
# ENTRYPOINT [ "dotnet", "Trivident.Movies.Web.dll" ]
CMD ASPNETCORE_URLS=http://*:$PORT dotnet Trivident.Movies.Web.dll