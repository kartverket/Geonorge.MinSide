# Min Side

## Diagram

```mermaid
flowchart LR
    %% --- Styles ---
    classDef system fill:#1f2a35,stroke:#7bb8ff,stroke-width:2px,color:#dcecff
    classDef register fill:#111,stroke:#aaa,stroke-width:2px,color:#dcecff
    classDef document fill:#172536,stroke:#7bb8ff,stroke-width:2px,color:#ffffff
    classDef note fill:#7d9fd5,stroke:#dcecff,stroke-width:1px,color:#ffffff

    %% --- Left register, vertically stacked ---
    subgraph REG1["Register"]
        direction TB

        Kodelister["Kodelister"]
        Produktspesifikasjoner["Produkt-\nspesifikasjoner"]
        Produktark["Produktark"]
        Tegneregler["Tegneregler"]
        Kartografi["Kartografi"]
        Organisasjoner["Organisasjoner"]
        Symboler["Symboler"]
        Varsler["Varsler"]

        Kodelister ~~~ Produktspesifikasjoner
        Produktspesifikasjoner ~~~ Produktark
        Produktark ~~~ Tegneregler
        Tegneregler ~~~ Kartografi
        Kartografi ~~~ Organisasjoner
        Organisasjoner ~~~ Symboler
        Symboler ~~~ Varsler
    end

    %% --- Core ---
    MinSide["Min Side<br/><small>SQL-Server</small>"]

    %% --- Top systems ---
    Kartkatalogen["Kartkatalogen"]
    GeoID["GeoID"]
    BAAT["BAAT"]

    %% --- Notification ---
    subgraph VarslingBox["Varsling"]
        direction TB
        Epost(("Epost"))
    end

    %% --- Bottom register, vertically stacked ---
    subgraph REG2["Register"]
        direction LR

        DOK["DOK-register"]
        Inspire["Inspire-register"]

        DOK ~~~ Inspire
    end

    %% --- Storage and logging ---
    subgraph FillagringBox["Fillagring"]
        direction TB
        Avtale["Avtale-\ndokumenter"]
    end

    subgraph LoggingBox["Logging"]
        direction TB
        Loggfiler["Logg-filer"]
    end

    %% --- Connections with API as line text ---
    REG1 -->|API| MinSide

    Kartkatalogen -->|API| MinSide

    MinSide <--> GeoID

    MinSide -->|API| BAAT

    MinSide --> Epost

    REG2 -->|API| MinSide

    MinSide <--> FillagringBox

    MinSide --> LoggingBox

    %% --- Classes ---
    class MinSide,Kartkatalogen,GeoID,BAAT system
    class REG1,REG2,VarslingBox,FillagringBox,LoggingBox register
    class Kodelister,Produktspesifikasjoner,Produktark,Tegneregler,Kartografi,Organisasjoner,Symboler,Varsler,DOK,Inspire,Avtale,Loggfiler document
    class Epost note
```

## Beskrivelse

Applikasjonen gir oversikt over innlogget brukers metadata. Bruker vil finne Norge Digitalt avtale-dokumenter, samt oppgaver man er blitt enige om under oppfølgingspunkter.

## Kjøremiljøer

| Miljø | URL |
|-------|-----|
| Dev | https://minside.dev.geonorge.no |
| Test | https://minside.test.geonorge.no |
| Produksjon | https://minside.geonorge.no |

## Teknisk
Utviklet med **.NET 8**, **C#** og **Vuejs**.
Applikasjonen benytter **GeoID** for å autentisere brukere.

### Geonorge.MinSide (Web)

ASP.NET Core MVC-applikasjonen:

- **Controllers** – Håndterer HTTP-forespørsler (MVC-views + REST API)
- **Views** – Razor-views for server-rendert brukergrensesnitt
- **Services** – Forretningslogikk (dokumenthåndtering, møtehåndtering)
- **Models** – View-modeller og applikasjonsinnstillinger
- **Utils** – Hjelpefunksjoner (innholdstype-gjenkjenning, Serilog-mellomvare)

### Geonorge.MinSide.Infrastructure

Datatilgangslaget:

- **Context** – EF Core `DbContext` (`OrganizationContext`) og entitetsdefinisjoner
- **Migrations** – EF Core databasemigrasjoner
- **Data** – Repository-implementasjoner (f.eks. `DownloadStatisticsRepository`)

### Geonorge.MinSide.Core

Domeneabstraksjoner (ingen avhengigheter til infrastruktur):

- **Models** – Domeneobjekter (`Organization`, `DownloadStatistics`)
- **Actions** – Use-case-grensesnitt
- **Repositories** – Repository-kontrakter

## Bakgrunnstjenester

Applikasjonen kjører en `TimedHostedService` som periodisk sender påminnelser på e-post til brukere som har aktivert varsling for oppgaver.

## Eksterne integrasjoner

| System | Formål | Protokoll |
|--------|--------|-----------|
| GeoID (Keycloak) | Identitetsleverandør / SSO | OpenID Connect |
| BAAT Authz API | Organisasjonsroller og tilganger | REST (HTTP) |
| Log Entry API | Sentralisert auditlogging | REST (HTTP) |
| SMTP-server | E-postvarsling | SMTP |

## Frontend

Frontenden er server-rendert med Razor-views og klient-side forbedringer:

- **Webpack 5** bundler JavaScript og Sass
- **jQuery** for DOM-manipulasjon
- **Font Awesome** for ikoner
- Vendor-biblioteker bundles separat via `webpack.config.vendor.js`
