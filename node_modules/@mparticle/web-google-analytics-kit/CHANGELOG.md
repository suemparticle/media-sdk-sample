## Releases

--
#### 2.1.9 - 2020-12-10
-   Refactor variable declaration for attrName

#### 2.1.8 - 2020-12-10
-   Bugfix - Remove unused variable, declare attrName variable 
      - This resolves an issue when self hosting and using strict mode

#### 2.1.7 - 2020-12-02
-   Update version to 2.1.7
      - There are no code changes in this commit. 2.1.6 was published but with the dist/ file from 2.1.5. This commit will include the correct dist/ file as we bump to 2.1.7 which corrects self hosting issues.

#### 2.1.6 - 2020-12-02
- Feat - support multiple content groups
      - Deprecation warning added for previous content group API ('Google.CGNumber' & 'Google.CGValue') which only allowed for a single content group to be set.  New API allows for up to 5 content groups to be set.  See docs for more details.

#### 2.1.5 - 2020-11-12
-   Update version to 2.1.5
      - There are no code changes in this commit. 2.1.4 was published but with the dist/ file from 2.1.3. This commit will include the correct dist/ file as we bump to 2.1.5 which corrects self hosting issues.


#### 2.1.4 - 2020-11-12

-   Replace semi-colons with commas for the multi-line var declaration.

#### 2.1.3 - 2020-11-12

-   Update version to 2.1.3
      - There are no code changes in this commit. 2.1.2 was published but with the dist/ file from 2.1.1. This commit will include the correct dist/ file as we bump to 2.1.3 which corrects self hosting issues.

#### 2.1.2 - 2020-11-11

-   Remove build from root of project and update rollup file

#### 2.1.1 - 2020-11-09

-   Bugfix - Add missing comma

#### 2.1.0 - 2020-09-23

-   Feat - Add content groups

#### 2.0.7 - 2020-07-28

-   Update npm test script

#### 2.0.6 - 2020-07-23

-   Feat - support "checkout option" events

#### 2.0.5 - 2020-05-07

-   Bugfix - hash customer id on reloads
-   Feat - Add user timing events

#### 2.0.4 - 2020-03-31

-   Bugfix - Allow an attribute to be mapped to multiple dimensions

#### 2.0.3 - 2020-01-29

-   Bugfix - Account for Google.Title Custom Flag
-   Update 'main' in package.json

#### 2.0.2 - 2019-11-20

-   Bugfix - Correct commerce types

#### 2.0.1 - 2019-10-23

-   Bugfix - Enable duplicate mappings
-   Add version number
-   Cleanup - Implement Prettier, update eslint file, remove isObject dependency
