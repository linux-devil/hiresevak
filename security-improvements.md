# Security Improvements for Supabase Integration

## Current Status
- ✅ Service Role Key: SECURE (server-only)
- ⚠️  Anon Key: EXPOSED (by design, but needs proper RLS)
- ✅ URL: EXPOSED (public endpoint)

## Recommended Security Measures

### 1. Strict RLS Policies (CRITICAL)
```sql
-- Only allow inserts, no reads for anonymous users
CREATE POLICY "questionnaire_insert_only" ON questionnaire_submissions
    FOR INSERT 
    TO anon
    WITH CHECK (
        -- Validate data format and limits
        length(name) BETWEEN 1 AND 100 AND
        length(email) BETWEEN 5 AND 255 AND
        email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND
        array_length(primary_concern, 1) BETWEEN 1 AND 10 AND
        array_length(service_interest, 1) BETWEEN 1 AND 10
    );

-- Prevent anonymous users from reading any data
-- (No SELECT policy for anon = no data access)
```

### 2. Rate Limiting
- Supabase provides built-in rate limiting for anon keys
- Consider additional rate limiting in your application

### 3. Data Validation
- Server-side validation via RLS policies
- Client-side validation for UX (not security)

### 4. Monitoring
- Monitor usage patterns in Supabase dashboard
- Set up alerts for unusual activity

### 5. Key Rotation
- Regularly rotate anon keys if needed
- Service role key should be rotated periodically

## What Attackers CAN'T Do
- Read existing questionnaire submissions (no SELECT policy)
- Modify or delete data (no UPDATE/DELETE policies)
- Access other tables (no policies granted)
- Perform admin operations (anon key has limited scope)

## What Attackers CAN Do
- Submit questionnaire forms (intended behavior)
- See your Supabase project URL (acceptable)
- Attempt to spam forms (mitigated by rate limiting + validation)

## Best Practices Implemented
✅ Service role key kept server-side
✅ RLS enabled on all tables
✅ Minimal permissions granted to anon role
✅ Input validation in RLS policies
✅ No sensitive data exposure through anon access