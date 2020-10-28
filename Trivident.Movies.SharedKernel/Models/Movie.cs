using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Trivident.Movies.SharedKernel.Models
{
    public class Movie
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("title")]
        public string Title { get; set; }

        [BsonElement("director")]
        public string Director { get; set; }

        [BsonElement("actors")]
        public string Actors { get; set; }

        [BsonElement("image")]
        public string Image { get; set; }
        
        [BsonElement("year")]
        public int Year { get; set; }
    }
}