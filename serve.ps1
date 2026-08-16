$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8000/")
$listener.Start()
Write-Host "Localhost preview server running at http://localhost:8000/"

$root = "c:\Users\aswad\OneDrive\Documents\You track ZA"

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response

    $path = $request.Url.LocalPath
    if ($path -eq "/") { $path = "/index.html" }

    $filePath = Join-Path $root $path.Substring(1).Replace('/', '\')

    if (Test-Path $filePath -PathType Leaf) {
        $bytes = [System.IO.File]::ReadAllBytes($filePath)
        
        # Mime types
        if ($filePath.EndsWith(".html")) { $response.ContentType = "text/html" }
        elseif ($filePath.EndsWith(".css")) { $response.ContentType = "text/css" }
        elseif ($filePath.EndsWith(".js")) { $response.ContentType = "application/javascript" }
        elseif ($filePath.EndsWith(".png")) { $response.ContentType = "image/png" }
        elseif ($filePath.EndsWith(".jpg")) { $response.ContentType = "image/jpeg" }

        $response.ContentLength64 = $bytes.Length
        $response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
        $response.StatusCode = 404
    }
    $response.OutputStream.Close()
}
