export default function() {
  return [
    {
      title: "Dashboard",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">apartment</i>',
      htmlAfter: ""
    },
    {
      title: "Companies",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/blog-posts"
    },
    {
      title: "Order Pool",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-new-post"
    },
    {
      title: "Order History",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview"
    },
    {
      title: "Subscriptions",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/tables"
    },
    {
      title: "Earnings",
      htmlBefore: '<i class="material-icons">account_balance</i>',
      to: "/user-profile-lite"
    },
    {
      title: "Reports",
      htmlBefore: '<i class="material-icons">poll</i>',
      to: "/errors"
    },
    {
      title: "Settings",
      htmlBefore: '<i class="material-icons">settings</i>',
      to: "/errors"
    },
    {
      title: "Supports",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/signup"
    }
  ];
}
