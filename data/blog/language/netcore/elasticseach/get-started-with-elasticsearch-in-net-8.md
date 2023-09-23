---
title: Get Started with Elasticsearch in .NET 8
date: '2023-09-24'
tags: ['NET 8', 'Elasticsearch', 'full-textsearch', 'elasticsearch-dotnet', 'aspnetcore']
images: '/static/images/elasticsearch/elasticsearch-vs-netcore.jpg'
draft: false
summary: Elasticsearch is a popular open-source search engine that can power advanced search functionality in your .NET applications. With the latest .NET 8 release, there are some great new features that make it easier to get started using Elasticsearch.
---

# Get Started with Elasticsearch in .NET 8

> A beginner's guide to using Elasticsearch for search in .NET 8 applications

Elasticsearch is a popular open-source search engine that can power advanced search functionality in your .NET applications. With the latest .NET 8 release, there are some great new features that make it easier to get started using Elasticsearch.

In this post, we'll walk through the steps to install Elasticsearch and create a simple search API in a .NET 8 web application.

We'll cover how to:
- Install and configure Elasticsearch on your system
- Create a new .NET 8 web application
- Add the Elasticsearch .NET client package
- Initialize a connection to the Elasticsearch cluster
- Index sample data into Elasticsearch
- Perform basic search queries
- Return search results to the browser

By the end, you'll have a basic understanding of how to integrate Elasticsearch into your .NET 8 applications for full-text search, filtering, and more.

`Prerequisites`
- Elasticsearch 7.x installed and running
- .NET 8 SDK installed
- Visual Studio 2022 or Visual Studio Code

`Steps`
1. Create a .NET 8 web application
In Visual Studio or VS Code, create a new ASP.NET Core Web API project
Select .NET 8 as the target framework
2. Add the Elasticsearch .NET client package
In the Package Manager console, run:
```nuget
Install-Package Elasticsearch.Net
```
This will add the latest Elasticsearch .NET client package to your project.

3. Configure the Elasticsearch client

In your `Program.cs:`
```csharp
// create the Elasticsearch client instance
var client = new ElasticClient(); 

// configure the client with the Elasticsearch node URL  
client.ConnectionSettings.DefaultIndex("articles");
```
Replace the URL with your actual Elasticsearch hostname and port.

4. Create a model class

Create a class to represent documents in Elasticsearch:
```csharp
public class Article 
{
  public int Id { get; set; }
  public string Title { get; set; }
  public string Content { get; set; } 
}
```

5. Index sample data

Add some code to index a couple sample articles:

```csharp
// create an Article
var article = new Article
{
    Id = 1,
    Title = "Article 1",
    Content = "This is the content of article 1"  
};

// index the document
client.IndexDocument(article);
```

6. Implement search API

Add a controller with search action:

```csharp
[ApiController]
public class SearchController : ControllerBase 
{

  [HttpGet("search")]
  public IActionResult Search(string query)
  {
    // search with a simple query string query 
    var response = client.Search<Article>(s => s
      .Query(q => q
        .QueryString(d => d 
          .Query(query)
        )
      )   
    );
    
    // return results
    return Ok(response.Documents);
  }

}
```
This performs a simple query string search and returns results.

7. Test search API

- Run the app and call the /search?query=article endpoint to test it.
- You should see the sample indexed documents returned.

And that covers the basics of integrating Elasticsearch search in a .NET 8 API! Let me know if you have any other questions.