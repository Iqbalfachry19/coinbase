import sanityClient from "@sanity/client";
export const client = sanityClient({
  projectId: "s937stje",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skQRydSJIjDDSz5tehDtWGJ3eBg7qJhNOxnfjNtMGrlZlqngOCuUbF1LNQ3LtqAGicT4kDdQiE88tqQo45EsrH7pmoRkZb1zFoZyaPGFG5vhIb3t2uqGaTQMnFP5xjzBUQaWXfmaZnF4lFovzcLduubR1YRcjuYtQskjjwDMEhVMgbJA3JqQ",
  useCdn: false,
});
