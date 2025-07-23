-- Check the exact table structure and constraints
-- This will show us which columns are causing NOT NULL violations

-- 1. Check all columns and their constraints
SELECT 
    column_name,
    data_type,
    is_nullable,
    column_default,
    CASE 
        WHEN is_nullable = 'NO' THEN 'REQUIRED'
        ELSE 'OPTIONAL'
    END as requirement_status
FROM information_schema.columns 
WHERE table_name = 'questionnaire_submissions' 
ORDER BY ordinal_position;

-- 2. Check detailed constraint information
SELECT 
    conname as constraint_name,
    contype as constraint_type,
    pg_get_constraintdef(oid) as constraint_definition
FROM pg_constraint 
WHERE conrelid = 'questionnaire_submissions'::regclass
ORDER BY conname;

-- 3. Test insert with all fields to see what's missing
-- This will help identify exactly which field is causing the issue
-- 
-- Uncomment this to test (make sure to comment it back):
-- INSERT INTO questionnaire_submissions (
--     current_location, 
--     primary_concern, 
--     service_interest, 
--     investment_range, 
--     timeline, 
--     name, 
--     email, 
--     phone, 
--     country_code
-- ) VALUES (
--     'United States',
--     ARRAY['Tax compliance and filing'],
--     ARRAY['Income Tax Return Filing'],
--     '$10,000 - $50,000',
--     'Within 1 month',
--     'Test User',
--     'test@example.com',
--     '1234567890',
--     '+1'
-- );