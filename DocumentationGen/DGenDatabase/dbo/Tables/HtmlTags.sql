CREATE TABLE [dbo].[HtmlTags] (
    Id INT IDENTITY(1,1) PRIMARY KEY, 
    [TagName] NVARCHAR(50) NOT NULL, 
    [TagDescription] NVARCHAR(2500) NOT NULL
);