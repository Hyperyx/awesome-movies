using System.Collections.Generic;
using Trivident.Movies.Web.Models;

namespace Trivident.Movies.Web.Services.Interfaces
{
    public interface IMovieService
    {
        List<Movie> Get();

        Movie Get(string id);

        void Update(string id, Movie movieIn);

        void Remove(Movie movieIn);

        void Remove(string id);
    }
}