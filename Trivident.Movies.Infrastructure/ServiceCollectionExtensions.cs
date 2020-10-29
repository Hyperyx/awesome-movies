using Microsoft.Extensions.DependencyInjection;
using Trivident.Movies.ApplicationCore.Entities;
using Trivident.Movies.ApplicationCore.Interfaces;
using Trivident.Movies.Infrastructure.Commands;
using Trivident.Movies.Infrastructure.Data;
using Trivident.Movies.Infrastructure.Data.Interfaces;
using Trivident.Movies.Infrastructure.Queries;

namespace Trivident.Movies.Infrastructure
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddInfrastructureServices(this IServiceCollection services)
        {
            services.AddScoped<IMoviesContext, MoviesContext>();

            // Queries
            services.AddScoped<IListQuery<Movie>, MovieListQuery>();
            services.AddScoped<IDetailsQuery<Movie>, MovieDetailsQuery>();
            
            // Commands
            services.AddScoped<ICreateCommand<Movie>, MovieCreateCommand>();
            services.AddScoped<IEditCommand<Movie>, MovieEditCommand>();
            services.AddScoped<IDeleteCommand<Movie>, MovieDeleteCommand>();
            
            return services;
        }
    }
}