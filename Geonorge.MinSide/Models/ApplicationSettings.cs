using System.Collections.Generic;
using System.Text.Json;

namespace Geonorge.MinSide.Models
{
    public class ApplicationSettings
    {
        public string BuildVersionNumber { get; set; }
        public string EnvironmentName { get; set; }
        public string ProxyAddress { get; set; }
        public Urls Urls { get; set; }
        public string BaatAuthzApiCredentials { get; set; }
        public string RedirectUri { get; set; }
        public string PostLogoutRedirectUri { get; set; }
        public string FilePath { get; set; }
        public string SmtpHost { get; set; }
        public string WebmasterEmail { get; set; }
        public string LogApi { get; set; }
        public string LogApiKey { get; set; }    
        public string UrlProxy { get; set; }

        public auth auth { get; set; }

        public PostHog PostHog { get; set; } = new PostHog();
    }

    public class PostHog
    {
        public string ApiKey { get; set; }

        /// <summary>Where events are sent, e.g. https://ph.kartverket.no</summary>
        public string ApiHost { get; set; }

        /// <summary>Where posthog-js is loaded from. Falls back to <see cref="ApiHost"/> when not set.</summary>
        public string AssetsHost { get; set; }

        /// <summary>Where the PostHog app itself lives, e.g. https://eu.posthog.com. Only used for links out of the toolbar.</summary>
        public string UiHost { get; set; }

        /// <summary>
        /// Autocapture sends the text content of clicked elements to PostHog, which in this application
        /// includes names, agreements and meeting notes. Keep off unless masking is configured.
        /// </summary>
        public bool Autocapture { get; set; }

        /// <summary>Session replay records page content, with the same personal data concerns as <see cref="Autocapture"/>.</summary>
        public bool DisableSessionRecording { get; set; } = true;

        /// <summary>Whether $pageview is sent on each page load. The named events are sent regardless.</summary>
        public bool CapturePageview { get; set; } = false;

        /// <summary>
        /// PostHog is only loaded in production, meaning no environment name is set, and only when an api key
        /// is configured. Same gate as Google Tag Manager uses in _Layout. A missing EnvironmentName counts as
        /// non-production, so a config without it does not start sending events.
        /// </summary>
        public bool IsEnabledFor(string environmentName) =>
            environmentName == "" && !string.IsNullOrWhiteSpace(ApiKey);

        public string ScriptUrl =>
            $"{(string.IsNullOrWhiteSpace(AssetsHost) ? ApiHost : AssetsHost)?.TrimEnd('/')}/static/array.js";

        /// <summary>The posthog.init() options, serialized so the view does not have to build javascript by hand.</summary>
        public string ClientConfigJson
        {
            get
            {
                var config = new Dictionary<string, object>
                {
                    ["api_host"] = ApiHost,
                    ["autocapture"] = Autocapture,
                    ["disable_session_recording"] = DisableSessionRecording,
                    /* identify() is never called, so no person profiles are created. */
                    ["person_profiles"] = "identified_only",
                    /* The view captures $pageview itself, after register(), so that every pageview
                       carries the app property. init() would otherwise capture the first one too early. */
                    ["capture_pageview"] = false
                };

                if (!string.IsNullOrWhiteSpace(UiHost))
                    config["ui_host"] = UiHost;

                return JsonSerializer.Serialize(config);
            }
        }
    }

    public class Urls
    {
        public string GeonorgeRoot { get; set; }
        public string BaatAuthzApi { get; set; }
    }

    public class auth 
    {
        public oidc oidc { get; set; }
    }

    public class oidc
    {
        public string clientid { get; set; }
        public string clientsecret { get; set; }
        public string IntrospectionUrl { get; set; }
    }
}
