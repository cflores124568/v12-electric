# V12 Electric city-page visual system

These nine hero mockups share one reusable city-page shell. Only the city data and hero photograph change.

## Shared shell

- 16:9, full-bleed image hero with a deep-ink left readability overlay
- Existing V12 logo and primary navigation
- City sequence label and city-specific electrician eyebrow
- Two-line upright grotesk headline with the city name in cobalt
- Short service-focus paragraph from `src/data/service-areas.ts`
- Cobalt contact CTA plus an understated local-services link
- Bottom local-service rail for utility, permit authority, and one field note
- Palette: ink `#0B1823`, ivory `#F4F0E8`, cobalt `#155CFF`, desert sand, and a minimal safety-orange marker

## City variants

| City | Headline | Image direction |
| --- | --- | --- |
| Palm Springs | Power, planned for Palm Springs. | Mid-century home, architectural lighting, EV charging |
| Cathedral City | Clear answers for Cathedral City. | Contemporary bungalow, panel and dedicated circuits |
| Desert Hot Springs | Built for Desert Hot Springs. | Spa, outdoor electrical, weatherproof equipment |
| Rancho Mirage | Finished work for Rancho Mirage. | Estate lighting and discreet EV routing |
| Palm Desert | Designed for Palm Desert. | Gallery lighting, commercial and condo context |
| Indian Wells | Quiet confidence for Indian Wells. | Seasonal estate readiness and guest charging |
| La Quinta | Every load, planned for La Quinta. | Pool, spa, outdoor living, EV and service capacity |
| Indio | Ready for what Indio adds next. | Newer home, EV, appliances and working garage |
| Coachella | Working power for Coachella. | Family property and small-commercial equipment circuits |

## Reusable data fields

`city`, `slug`, `sequence`, `headline`, `focus`, `heroImage`, `heroAlt`, `primaryCta`, `utility`, `permitAuthority`, and `fieldNote`.

The existing `serviceAreaCities` collection already provides most of this data. Add only the visual fields and headline rather than duplicating city facts in page markup.
