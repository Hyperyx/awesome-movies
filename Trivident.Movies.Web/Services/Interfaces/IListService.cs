using System.Collections.Generic;
using System.Threading.Tasks;

namespace Trivident.Movies.Web.Services.Interfaces
{
    public interface IListService<T>
    {
        Task<List<T>> ExecuteAsync();
    }
}