using System;
using System.Threading.Tasks;
using Trivident.Movies.ApplicationCore.Entities;
using Trivident.Movies.ApplicationCore.Interfaces;
using Trivident.Movies.Web.Services.Interfaces;

namespace Trivident.Movies.Web.Services
{
    public class MovieDetailsService : IDetailsService<Movie>
    {
		private readonly IDetailsQuery<Movie> _query;

		public MovieDetailsService(IDetailsQuery<Movie> query)
		{
            this._query = query ?? throw new ArgumentNullException(nameof(query));
		}
        
		public async Task<Movie> ExecuteAsync(string id) => await _query.ExecuteAsync(id);
    }
}