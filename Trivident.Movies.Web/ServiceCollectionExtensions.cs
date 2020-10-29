using System;
using Microsoft.Extensions.DependencyInjection;
using Trivident.Movies.ApplicationCore.Entities;
using Trivident.Movies.Web.Services;
using Trivident.Movies.Web.Services.Interfaces;

namespace Trivident.Movies.Web
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddServices(this IServiceCollection services)
        {
            if (services == null) throw new ArgumentNullException(nameof(services));

            services.AddScoped<ICreateService<Movie>, MovieCreateService>();
            services.AddScoped<IDeleteService<Movie>, MovieDeleteService>();
            services.AddScoped<IDetailsService<Movie>, MovieDetailsService>();
            services.AddScoped<IEditService<Movie>, MovieEditService>();
            services.AddScoped<IListService<Movie>, MovieListService>();
            
            return services;
        }        
    }
}