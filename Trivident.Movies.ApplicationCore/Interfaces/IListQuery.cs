using System.Collections.Generic;
using System.Threading.Tasks;

namespace Trivident.Movies.ApplicationCore.Interfaces
{
    public interface IListQuery<T>
    {
        Task<List<T>> ExecuteAsync();
    }
}