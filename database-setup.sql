-- Create the questionnaire_submissions table in Supabase
-- Run this SQL in your Supabase SQL editor

CREATE TABLE questionnaire_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  current_location TEXT NOT NULL,
  primary_concern TEXT[] NOT NULL, -- Array to store multiple concerns
  service_interest TEXT[] NOT NULL, -- Array to store multiple services
  investment_range TEXT NOT NULL,
  timeline TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  country_code TEXT DEFAULT '+1'
);

-- Enable Row Level Security (RLS)
ALTER TABLE questionnaire_submissions ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (in case you're re-running this)
DROP POLICY IF EXISTS "Allow anonymous inserts" ON questionnaire_submissions;
DROP POLICY IF EXISTS "Allow authenticated reads" ON questionnaire_submissions;
DROP POLICY IF EXISTS "Allow all inserts" ON questionnaire_submissions;

-- Create a policy to allow all inserts (both anonymous and authenticated)
CREATE POLICY "Allow all inserts" ON questionnaire_submissions
  FOR INSERT 
  WITH CHECK (true);

-- Create a policy to allow authenticated users to read all submissions
-- (useful for admin dashboard later)
CREATE POLICY "Allow authenticated reads" ON questionnaire_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Create indexes for better query performance
CREATE INDEX idx_questionnaire_email ON questionnaire_submissions(email);
CREATE INDEX idx_questionnaire_created_at ON questionnaire_submissions(created_at);
CREATE INDEX idx_questionnaire_location ON questionnaire_submissions(current_location);