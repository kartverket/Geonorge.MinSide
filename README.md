# Geonorge Min Side

Applikasjonen gir oversikt over innlogget brukers metadata. Bruker vil finne Norge Digitalt avtale-dokumenter, samt oppgaver man er blitt enige om under oppfølgingspunkter.

## Kjøremiljøer

| Miljø | URL |
|-------|-----|
| Dev | https://minside.dev.geonorge.no |
| Test | https://minside.test.geonorge.no |
| Produksjon | https://minside.geonorge.no |

## Teknologi

| Lag | Teknologi |
|-----|-----------|
| Runtime | .NET 8 (ASP.NET Core MVC) |
| Database | SQL Server (Entity Framework Core 6) |
| Autentisering | OpenID Connect (GeoID) + JWT Bearer |
| Frontend | Webpack 5, Sass, jQuery |
| Logging | Serilog |
| API-dokumentasjon | Swashbuckle (Swagger / OpenAPI) |

## Prosjektstruktur

```
Geonorge.MinSide.sln
├── Geonorge.MinSide/                 # Web-applikasjon (kontrollere, views, tjenester)
├── Geonorge.MinSide.Infrastructure/  # EF Core-kontekst, migrasjoner, datatilgang
└── Geonorge.MinSide.Core/            # Domene-grensesnitt og modeller
```

## Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js](https://nodejs.org/) (LTS) + Yarn 1.x
- SQL Server (lokal eller remote)

## Oppsett av utviklingsmiljø

### 1. Klon repoet

```bash
git clone <repo-url>
cd Geonorge.MinSide
```

### 2. GeoID/BAAT-konfigurering

Se [Confluence](https://kartverket.atlassian.net/wiki/spaces/GEON/pages/330629847/Minside)


### 5. Installer frontend-avhengigheter

```bash
cd Geonorge.MinSide
yarn install
```

### 6. Kjør databasemigrasjoner

```bash
dotnet ef database update --project Geonorge.MinSide.Infrastructure --startup-project Geonorge.MinSide
```

### 7. Start applikasjonen

```bash
# Utviklingsmodus
cd Geonorge.MinSide
yarn dev

# Eller direkte via dotnet
dotnet run --project Geonorge.MinSide
```

### 8. Swagger UI

Når applikasjonen kjører, naviger til `/swagger` for å utforske API-dokumentasjonen.

## Roller

Applikasjonen benytter rollebasert autorisasjon fra GeoID:

| Rolle | Beskrivelse |
|-------|------------|
| `nd.metadata_admin` | Full tilgang (CRUD på alle ressurser) |
| `nd.metadata_editor` | Les- og skrivetilgang til møter og oppgaver |
| `nd.kontaktpunkt` | Lesetilgang til møter og oppgaver |