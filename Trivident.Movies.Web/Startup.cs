using System.Collections.Generic;
using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using Trivident.Movies.Infrastructure;
using Trivident.Movies.Infrastructure.Data;
using Trivident.Movies.Infrastructure.Data.Interfaces;
using Trivident.Movies.SharedKernel.Configuration;
using Trivident.Movies.SharedKernel.Configuration.Interfaces;

namespace Trivident.Movies.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // requires using Microsoft.Extensions.Options
            services.Configure<MovieDatabaseSettings>(
                Configuration.GetSection(nameof(MovieDatabaseSettings)));

            services.AddSingleton<IMovieDatabaseSettings>(sp =>
                sp.GetRequiredService<IOptions<MovieDatabaseSettings>>().Value);

            services.AddScoped<IMoviesContext, MoviesContext>();

            services.AddInfrastructureServices();
            services.AddServices();
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.Use(async (context, next) => {
                    await next();
                    if(context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value)) {
                        context.Request.Path = "/index.html";
                        await next();
                    }
            })
            .UseDefaultFiles(new DefaultFilesOptions { DefaultFileNames = new List<string>{ "index.html" } })
            .UseStaticFiles(new StaticFileOptions 
                            {
                            FileProvider = new PhysicalFileProvider(
                                Path.Combine(Directory.GetCurrentDirectory(), "wwwroot")),
                                RequestPath = new PathString("")
            });
            
            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
