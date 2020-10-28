using AutoMapper;
using Trivident.Movies.Web.Models;
using Entities = Trivident.Movies.ApplicationCore.Entities;

namespace Trivident.Movies.Web
{
    public class MappingProfile : Profile 
    {
        public MappingProfile() 
        {
            CreateMap<Entities.Movie, Movie>();
            CreateMap<Movie, Entities.Movie>();
        }
    }    
}