using Ganss.Xss;

namespace Geonorge.MinSide.Utils
{
    /// <summary>
    /// Allow-list HTML sanitizer for safely rendering semi-trusted HTML in views — e.g. audit-log
    /// descriptions that are built from user-supplied ToDo fields and Markdig output. The default
    /// HtmlSanitizer configuration keeps common formatting tags (p, a, strong, em, ul/ol/li, br,
    /// headings, code, ...) while stripping &lt;script&gt;, event handlers and javascript: URLs.
    /// A single configured instance is reused; it is only read (never reconfigured) after creation.
    /// </summary>
    public static class HtmlSanitizerHelper
    {
        private static readonly HtmlSanitizer Sanitizer = new HtmlSanitizer();

        public static string SanitizeHtml(string html)
        {
            return string.IsNullOrEmpty(html) ? string.Empty : Sanitizer.Sanitize(html);
        }
    }
}
