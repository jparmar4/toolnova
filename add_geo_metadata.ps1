# PowerShell script to add GEO metadata to all blog posts
$filePath = "d:\Web\aimultitools\src\data\blog.ts"
$content = Get-Content $filePath -Raw

# Define author slug mappings based on author names
$authorMappings = @{
    "Sarah Mitchell" = "sarah-mitchell"
    "Marcus Chen" = "marcus-chen"
    "Dr. Emily Parker" = "emily-parker"
}

# Add dateModified, authorSlug, and wordCount to each blog post
# Pattern: after 'date: "...",\n' add 'dateModified: "Feb 7, 2026",\n'
# Pattern: after 'author: "...",\n' add 'authorSlug: "...",\n'
# Pattern: after 'readTime: "... min read",\n' add 'wordCount: ...,\n'

# Replace patterns for each author
foreach ($author in $authorMappings.Keys) {
    $slug = $authorMappings[$author]
    
    # Add authorSlug after author name
    $content = $content -replace "author: `"$author`",\s*\r?\n\s*authorRole:", "author: `"$author`",`r`n        authorSlug: `"$slug`",`r`n        authorRole:"
}

# Add dateModified after date (for all posts that don't have it)
$content = $content -replace 'date: "([^"]+)",\s*\r?\n\s*category:', 'date: "$1",`r`n        dateModified: "Feb 7, 2026",`r`n        category:'

# Add wordCount after readTime with estimated values
$content = $content -replace 'readTime: "(\d+) min read",\s*\r?\n\s*metaDescription:', 'readTime: "$1 min read",`r`n        wordCount: $1' + '00,`r`n        metaDescription:'

# Save the updated content
Set-Content -Path $filePath -Value $content -NoNewline

Write-Host "Successfully added GEO metadata to all blog posts!"
