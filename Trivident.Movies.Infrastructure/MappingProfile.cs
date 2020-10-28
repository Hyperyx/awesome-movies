using AutoMapper;
using Trivident.Movies.SharedKernel.Models;
using Entities = Trivident.Movies.ApplicationCore.Entities;

namespace Trivident.Movies.Infrastructure
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