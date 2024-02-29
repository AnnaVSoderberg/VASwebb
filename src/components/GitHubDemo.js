import React, {useState, useEffect} from 'react';

import './GitHubDemo.css'

export default function GitHubDemo(){
    const [posts, setPosts]=useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/AnnaVsoderberg/repos')
        .then(response=>response.json())
        .then(data=>setPosts(data))
        .catch(error=>console.error('Kunde inte läsa data ', error))
    }, []);
    return(
        <div>
            {/* <h1>My public projects from GitHub</h1>
            <ul>
                {
                    posts.map(post=>(
                        <li key={post.id}>
                            <h3>{post.name}</h3>
                            <p>{post.description}</p>

                        </li>
                    ))
                }
            </ul> */}
            <div className="table-container">
        <table>
        <thead>
          <tr>
            <th>Projektnamn</th>
            <th>Beskrivning</th>
            <th>Stjärnor</th>
            <th>Länk</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.name}</td>
              <td>{post.description || 'Ingen beskrivning tillgänglig'}</td>
              <td>{post.stargazers_count}</td>
              <td><a href={post.html_url} target="_blank" rel="noopener noreferrer">Projektlänk</a></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>



        </div>
    );
} 