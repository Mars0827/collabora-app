using System.Collections.Concurrent;
using collabora_chat_service.Models;

namespace collabora_chat_service.DataService;

public class SharedDb
{
    private readonly ConcurrentDictionary<string,UserConnection> _connections = new ();
    
    public ConcurrentDictionary<string, UserConnection> connections => _connections;
}