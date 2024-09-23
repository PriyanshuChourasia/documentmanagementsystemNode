/**
 * @openapi
 * components:
 *  schemas:
 *      GetUserById:
 *          type: object
 *          properties:
 *              data:
 *                  type: object
 *                  properties:
 *                      result:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/UserById'
 * 
 *      UserById:
 *          type: object
 *          properties:
 *              _id:
 *                  type: string
 *                  default: 550e8400-e29b-41d4-a716-446655440000
 *              name:
 *                  type: string
 *                  default: Name
 *              email:
 *                  type: string
 *                  default: Email
 *              createdAt:
 *                  type: string
 *                  format: date-time
 *      UserLogin:
 *          type: object
 *          required:
 *              - email
 *              - password
 *          properties:
 *              email:
 *                  type: string
 *                  default: Priyanshu
 *              password:
 *                  type: string
 *                  default: password 
 */