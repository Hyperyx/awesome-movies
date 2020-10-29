using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Trivident.Movies.ApplicationCore.Entities;
using Trivident.Movies.ApplicationCore.Interfaces;
using Trivident.Movies.Web.Services.Interfaces;

namespace Trivident.Movies.Web.Services
{
    public class MovieListService : IListService<Movie>
    {
		private readonly IListQuery<Movie> _query;

		public MovieListService(IListQuery<Movie> query)
		{
            this._query = query ?? throw new ArgumentNullException(nameof(query));
		}
        
		public async Task<List<Movie>> ExecuteAsync() => await _query.ExecuteAsync();
    }
}