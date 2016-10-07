#WCAG as JSON

This is a JSON formatted version of WCAG 2.0

We created this as a way to be able to quickly insert references to WCAG-related information into other documents.

## Structure

The structure of the JSON file closely mirrors the WCAG Standard itself:

* There are 4 core principles of WCAG
* Each Principle has Guidelines
* Each Guideline has Success Criteria

In this JSON format the Success Criteria themselves have been broken down further:

* Special Cases
* Notes

A full WCAG SC Entry looks like this:

```
 {
     "title": "Name, Role, Value",
     "description": "For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies.",
     "url": "https://www.w3.org/TR/WCAG20/#ensure-compat-rsv",
     "level": "A",
     "special_cases": null,
     "notes": [{
         "content": "This success criterion is primarily for Web authors who develop or script their own user interface components. For example, standard HTML controls already meet this success criterion when used according to specification."
     }],
     "references": [{
         "title": "How to Meet 4.1.2",
         "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-ensure-compat-rsv"
     },
     {
         "title": "Understanding 4.1.2",
         "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html"
     }]
 }

```

##License
The JSON formatted document has an MIT license.

This software or document includes material copied from or derived from Web Content Accessibility Guidelines (WCAG) 2.0 https://www.w3.org/TR/WCAG20/. Copyright © 2008 W3C® (MIT, ERCIM, Keio, Beihang).
