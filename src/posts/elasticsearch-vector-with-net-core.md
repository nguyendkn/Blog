---
title: "Sử dụng Elasticsearch Vector Scoring với .NET Core"
imgUrl: "/images/terminal-setup.jpg"
youtubeId: ""
publishedAt: "2022-10-03"
summary: "This is my supplementary blog post for using elasticsearch-vector-scoring with .net core"
---
# Khi làm việc với dữ liệu vector như embedding vectors từ các mô hình học máy, việc tìm kiếm và so sánh các vector trở nên rất quan trọng. Trong bài viết này, chúng ta sẽ tìm hiểu cách sử dụng `elasticsearch-vector-scoring` với .NET Core để thực hiện các truy vấn dựa trên vector.

## Cài đặt Elasticsearch và Plugin

1. Cài đặt Elasticsearch.
2. Cài đặt plugin `elasticsearch-vector-scoring` cho Elasticsearch.

## Thiết lập .NET Core

### Cài đặt Thư viện

Sử dụng thư viện `NEST`, một thư viện client chính thức cho Elasticsearch trên .NET:

```csharp
Install-Package NEST
```

Kết nối và Chỉ mục Dữ liệu
```csharp
var settings = new ConnectionSettings(new Uri("http://localhost:9200"))
    .DefaultIndex("your_index_name");

var client = new ElasticClient(settings);

var document = new MyDocument
{
    Id = 1,
    VectorField = new List<float> { 1.0f, 2.0f, ... }
};

client.IndexDocument(document);

public class MyDocument
{
    public int Id { get; set; }
    public List<float> VectorField { get; set; }
}
```
Truy vấn sử dụng Vector
```csharp
var searchResponse = client.Search<MyDocument>(s => s
    .Size(5)
    .Query(q => q
        .ScriptScore(ss => ss
            .Query(qq => qq.MatchAll())
            .Script(sc => sc
                .Source("cosineSimilarity(params.query_vector, doc['VectorField']) + 1.0")
                .Params(p => p
                    .Add("query_vector", new List<float> { 1.0f, 2.0f, ... })
                )
            )
        )
    )
    .Sort(so => so
        .Descending(SortSpecialField.Score)
    )
);

var top5Documents = searchResponse.Documents;
```
## Kết luận
## Sử dụng elasticsearch-vector-scoring với .NET Core giúp bạn dễ dàng thực hiện các truy vấn dựa trên vector và tận dụng sức mạnh của Elasticsearch. Hãy thử nghiệm và tối ưu hóa cấu hình của bạn để đạt được hiệu suất tốt nhất!
