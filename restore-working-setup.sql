-- RESTORE WORKING SETUP: This will get your form working again
-- Run this in your Supabase SQL Editor

-- First, let's see what policies currently exist
SELECT 
    policyname,
    cmd,
    roles,
    with_check
FROM pg_policies 
WHERE tablename = 'questionnaire_submissions';

-- Drop ALL existing policies to start fresh
DROP POLICY IF EXISTS "Allow anonymous inserts" ON questionnaire_submissions;
DROP POLICY IF EXISTS "Allow authenticated reads" ON questionnaire_submissions;
DROP POLICY IF EXISTS "Allow all inserts" ON questionnaire_submissions;
DROP POLICY IF EXISTS "Enable insert for all users" ON questionnaire_submissions;
DROP POLICY IF EXISTS "Enable read for authenticated users only" ON questionnaire_submissions;
DROP POLICY IF EXISTS "Allow questionnaire submissions" ON questionnaire_submissions;
DROP POLICY IF EXISTS "questionnaire_insert_policy" ON questionnaire_submissions;
DROP POLICY IF EXISTS "questionnaire_read_policy" ON questionnaire_submissions;
DROP POLICY IF EXISTS "allow_questionnaire_inserts" ON questionnaire_submissions;
DROP POLICY IF EXISTS "allow_authenticated_reads" ON questionnaire_submissions;
DROP POLICY IF EXISTS "allow_anon_inserts" ON questionnaire_submissions;
DROP POLICY IF EXISTS "allow_auth_inserts" ON questionnaire_submissions;
DROP POLICY IF EXISTS "allow_inserts" ON questionnaire_submissions;
DROP POLICY IF EXISTS "allow_reads" ON questionnaire_submissions;
DROP POLICY IF EXISTS "secure_questionnaire_submissions" ON questionnaire_submissions;
DROP POLICY IF EXISTS "authenticated_read_questionnaires" ON questionnaire_submissions;
DROP POLICY IF EXISTS "secure_questionnaire_insert" ON questionnaire_submissions;
DROP POLICY IF EXISTS "secure_questionnaire_read" ON questionnaire_submissions;
DROP POLICY IF EXISTS "allow_all_inserts_debug" ON questionnaire_submissions;

-- Ensure RLS is enabled
ALTER TABLE questionnaire_submissions ENABLE ROW LEVEL SECURITY;

-- Grant basic permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT INSERT ON questionnaire_submissions TO anon, authenticated;
GRANT SELECT ON questionnaire_submissions TO authenticated;

-- Create the simplest policy that allows all inserts
CREATE POLICY "public_insert" ON questionnaire_submissions
    FOR INSERT
    TO PUBLIC
    WITH CHECK (true);

-- Create read policy for authenticated users
CREATE POLICY "authenticated_select" ON questionnaire_submissions
    FOR SELECT
    TO authenticated
    USING (true);

-- Test the setup immediately
INSERT INTO questionnaire_submissions (
    current_location, 
    primary_concern, 
    service_interest, 
    investment_range, 
    timeline, 
    name, 
    email, 
    phone, 
    country_code
) VALUES (
    'United States',
    ARRAY['Tax compliance and filing'],
    ARRAY['Income Tax Return Filing'],
    '$10,000 - $50,000',
    'Within 1 month',
    'Test User',
    'test@example.com',
    '1234567890',
    '+1'
);

-- Verify the test worked
SELECT 'SUCCESS: Test insert worked!' as result, count(*) as test_records
FROM questionnaire_submissions 
WHERE name = 'Test User';

-- Clean up test data
DELETE FROM questionnaire_submissions WHERE name = 'Test User';

-- Show final policy status
SELECT 
    'Setup complete!' as message,
    policyname,
    cmd as operation,
    COALESCE(roles::text, 'PUBLIC') as applies_to
FROM pg_policies 
WHERE tablename = 'questionnaire_submissions'
ORDER BY policyname;