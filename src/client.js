import { createClient } from "@supabase/supabase-js";

const URL = "https://fspsvummltmrcjfpozja.supabase.co";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzcHN2dW1tbHRtcmNqZnBvemphIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI3MTUxNDEsImV4cCI6MjAwODI5MTE0MX0.mgpbHAlJckLPrpryGgJ0nRh35GMvefDVTB-hyI6KhdA";

export const supabase = createClient(URL, API_KEY);
