/** @type {import('next').NextConfig} */
const nextConfig = {}
const withDocument = (req, res, next) => {
    // Get the document from the request
    const document = req.body.document;
  
    // Render the page with the document variable
    next({ document });
  };
  
module.exports = withDocument;
 
module.exports = nextConfig
