using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using Trivident.Movies.ApplicationCore.Entities;
using Trivident.Movies.Infrastructure;
using Trivident.Movies.Infrastructure.Data;
using Trivident.Movies.Infrastructure.Data.Interfaces;
using Trivident.Movies.SharedKernel.Configuration;
using Trivident.Movies.SharedKernel.Configuration.Interfaces;
using Trivident.Movies.Web.Services;
using Trivident.Movies.Web.Services.Interfaces;

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
            services.Configure<TestDatabaseSettings>(
                Configuration.GetSection(nameof(TestDatabaseSettings)));

            services.AddSingleton<ITestDatabaseSettings>(sp =>
                sp.GetRequiredService<IOptions<TestDatabaseSettings>>().Value);

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

            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
