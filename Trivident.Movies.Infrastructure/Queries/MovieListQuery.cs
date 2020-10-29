using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MongoDB.Driver;
using Trivident.Movies.ApplicationCore.Entities;
using Trivident.Movies.ApplicationCore.Interfaces;
using Trivident.Movies.Infrastructure.Data.Interfaces;

namespace Trivident.Movies.Infrastructure.Queries
{
    public class MovieListQuery : IListQuery<Movie>
    {
        private readonly IMoviesContext _context;

        public MovieListQuery(IMoviesContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public async Task<List<Movie>> ExecuteAsync()
        {
            return (await _context.Movies.FindAsync(movie => true))?.ToList();
        }
    }
}