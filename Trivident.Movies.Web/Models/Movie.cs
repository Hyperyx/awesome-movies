namespace Trivident.Movies.Web.Models
{
    public class Movie
    {
        public string Id { get; set; }

        public string Title { get; set; }

        public string Director { get; set; }

        public string Actors { get; set; }

        public string Image { get; set; }
        
        public int Year { get; set; }
    }
}