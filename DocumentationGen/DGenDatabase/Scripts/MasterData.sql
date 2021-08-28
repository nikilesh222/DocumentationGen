/*
Post-Deployment Script Template							
--------------------------------------------------------------------------------------
 This file contains SQL statements that will be appended to the build script.		
 Use SQLCMD syntax to include a file in the post-deployment script.			
 Example:      :r .\myfile.sql								
 Use SQLCMD syntax to reference a variable in the post-deployment script.		
 Example:      :setvar TableName MyTable							
               SELECT * FROM [$(TableName)]					
--------------------------------------------------------------------------------------
*/

MERGE INTO [dbo].[HtmlTags] AS TARGET 
    USING ( VALUES 
            (N'h1', N'The h1 element represents a level 1 heading. Headings (from h1 to h6 ) are titles that define implied sections in the document and arrange its contents in a hierarchical structure. When headings are combined with the section element the sections of a document are no longer implied but exactly defined.')
          )
    AS SOURCE ([TagName], [TagDescription]) 
    ON TARGET.[TagName] = SOURCE.[TagName]
    WHEN MATCHED THEN 
    UPDATE SET [TagName] = SOURCE.[TagName],
                            [TagDescription] = SOURCE.[TagDescription]
    WHEN NOT MATCHED BY TARGET THEN
    INSERT ([TagName], [TagDescription])
    VALUES ([TagName], [TagDescription]);
   