# Analytics setup

This landing page tracks page views in Google Analytics 4 (GA4) and visitor behavior in Microsoft Clarity. It also sends these GA4/Clarity events:

| Event | When it is sent |
| --- | --- |
| `whatsapp_click` | A visitor clicks any WhatsApp link, including the floating button and modal CTA. |
| `portfolio_live_click` | A visitor opens the Skema HQ live portfolio. |
| `cost_calculator_click` | A visitor clicks **Hitung Estimasi Biaya**. The CTA opens WhatsApp with a prefilled estimate request. |
| `newsletter_submit` | A visitor submits the email form. |

## 1. Create the measurement IDs

1. In [Google Analytics](https://analytics.google.com/), create a GA4 web data stream for the deployed domain. Copy its Measurement ID, which looks like `G-XXXXXXXXXX`.
2. In [Microsoft Clarity](https://clarity.microsoft.com/), create a project for the same domain. Copy its Project ID.

## 2. Add the IDs

Edit `analytics-config.js`:

```js
window.VERTEX_ANALYTICS = {
  gaMeasurementId: 'G-XXXXXXXXXX',
  clarityProjectId: 'your-clarity-project-id'
};
```

Replace both placeholder values, save, commit, and deploy to Vercel. These IDs are intended to be present in browser code; do not put API secrets in this file.

## 3. Verify after deployment

1. Open the deployed site in a new/private browser window.
2. In GA4, open **Reports > Realtime**. Your visit should appear within a few minutes.
3. Click the WhatsApp, portfolio, and cost-estimate buttons. In GA4, inspect **Admin > DebugView** or **Reports > Engagement > Events** for their events.
4. In Clarity, allow time for sessions and heatmaps to populate; this can take a short while.

## Vercel note

This is a static HTML project, so browser-side tracking IDs cannot be read directly from Vercel environment variables at runtime. The analytics IDs above are public identifiers and are deliberately kept in `analytics-config.js`. Do not add private API keys or service-account credentials to the frontend.
